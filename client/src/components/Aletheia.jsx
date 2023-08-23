import React, { useState, useRef } from 'react';

const Aletheia = () => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const fileInput = useRef(null);

    const handleSubmit = async () => {
        const selectedFile = fileInput.current?.files[0];

        if (!selectedFile) {
            setError("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                mode: 'cors',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            setResult(data);
        } catch (err) {
            console.error('Error:', err);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className='text-center'>
            <div className='text-white text-5xl'>Aletheia</div>
            <input type="file" ref={fileInput} />
            <button onClick={handleSubmit} className='text-white'>Submit</button>

            {result && (
                <div className={result.prediction ? "font-secondary" : "font-fake"}>
                    {result.prediction ? "Real" : "AI-generated"}
                </div>
            )}
            {error && <div className="text-red-500">{error}</div>}
        </div>
    );
}

export default Aletheia;