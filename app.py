from flask_cors import CORS
from flask import Flask, jsonify
from processdata import processdata
app = Flask(__name__)
CORS(app)

@app.route('/')
def displaylocations():
    l = processdata()
    return jsonify(l)

if __name__ == '__main__':
    app.run(host = 'localhost', debug = True, port = 5000)