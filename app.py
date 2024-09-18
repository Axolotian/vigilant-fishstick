from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/random-number', methods=['GET'])
def random_number():
    test = random.randint(1, 10)
    return jsonify({'test': test})

if __name__ == '__main__':
    app.run(debug=True)
