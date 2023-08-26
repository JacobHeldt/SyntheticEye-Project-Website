# Use an official Python runtime as the base image
FROM python:3.10-slim

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV NAME World

# Run app.py when the container launches
<<<<<<< HEAD
CMD ["python", "app.py"]
=======
CMD ["gunicorn", "app:app", "-b", "0.0.0.0:5000", "--workers", "2"]
>>>>>>> parent of 1b7fd4d (uwsgi)
