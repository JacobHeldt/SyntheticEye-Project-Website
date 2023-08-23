from flask import Flask, request, jsonify
import torch
import torchvision.transforms as transforms
from PIL import Image
import torchvision
import torch.nn as nn
import torch.nn.functional as F
import torchvision.transforms as transforms
from PIL import Image
import os
import requests
from flask_cors import CORS


# Model
class CNN(nn.Module):
    def __init__(self, dropout_prob=0.4):
        super(CNN, self).__init__()

        # First convolutional layer
        self.conv1 = nn.Conv2d(in_channels=3, out_channels=32, kernel_size=3, stride=1, padding=1)
        self.bn1 = nn.BatchNorm2d(32)

        # Second convolutional layer
        self.conv2 = nn.Conv2d(in_channels=32, out_channels=64, kernel_size=3, stride=1, padding=1)
        self.bn2 = nn.BatchNorm2d(64)

        # Third convolutional layer
        self.conv3 = nn.Conv2d(in_channels=64, out_channels=128, kernel_size=3, stride=1, padding=1)
        self.bn3 = nn.BatchNorm2d(128)

        # Dropout after convolutional layers
        self.dropout_conv = nn.Dropout(p=dropout_prob/2)

        # Fully connected layers
        self.fc1 = nn.Linear(128 * 32 * 32, 256)
        self.fc2 = nn.Linear(256, 128)
        self.fc3 = nn.Linear(128, 1)  # Only one output node for binary classification

        # Dropout for fully connected layers
        self.dropout_fc = nn.Dropout(p=dropout_prob)

    def forward(self, x):
        # Conv layer 1
        x = F.leaky_relu(self.bn1(self.conv1(x)))
        x = F.max_pool2d(x, kernel_size=2)
        x = self.dropout_conv(x)

        # Conv layer 2
        x = F.leaky_relu(self.bn2(self.conv2(x)))
        x = F.max_pool2d(x, kernel_size=2)
        x = self.dropout_conv(x)

        # Conv layer 3
        x = F.leaky_relu(self.bn3(self.conv3(x)))
        x = F.max_pool2d(x, kernel_size=2)
        x = self.dropout_conv(x)

        # Flatten
        x = x.view(x.size(0), -1)

        # FC layers
        x = F.leaky_relu(self.fc1(x))
        x = self.dropout_fc(x)

        x = F.leaky_relu(self.fc2(x))
        x = self.dropout_fc(x)

        x = self.fc3(x)

        return x
    
# App
app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "*"}})

MODEL_PATH = 'model.pth'
# ONEDRIVE_LINK = 'https://1drv.ms/u/s!AhUjBN7ZLN3PhDc9CmcGjiObxap1?e=qqbrQ0'

# def donwload_model():
#     if not os.path.isfile(MODEL_PATH):
#         # Download the model
#         response = requests.get(ONEDRIVE_LINK, allow_redirects=True)
#         with open(MODEL_PATH, 'wb') as f:
#             f.write(response.content)

# # Check if model exists, if not, download it
# donwload_model()


model = CNN()  # Replace with the name of your model class
model.load_state_dict(torch.load(MODEL_PATH, map_location=torch.device('cpu')))
model.eval()

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        image = Image.open(file.stream).convert('RGB')
        transform = transforms.Compose([
            transforms.Resize((256, 256)),
            transforms.ToTensor(),
        ])
        image_tensor = transform(image).unsqueeze(0)
        output = model(image_tensor)
        prediction = (torch.sigmoid(output) > 0.5).item()

        response = jsonify({"prediction": prediction})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        return response

if __name__ == '__main__':
    app.run(debug=True)