from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS-HEADERS'] = 'Content-Type'

@app.route('/api/temperature')
@cross_origin()
def getTemperature():
    return jsonify(
        temperature=100,
        time="10:10"
    )