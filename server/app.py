from flask import Flask
from flask_restful import Api

from flask_jwt_extended import JWTManager

from resources.Auth import Auth
from resources.User import User

# Set up Flask
app = Flask(__name__)
api = Api(app)

# Set up Flask-JWT-Extended extension
app.config['JWT_SECRET_KEY'] = "동해물과뷁두산이마르고닭도록화느님이보우화사"
jwt = JWTManager(app)

@app.after_request
def after_request_func(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  return response

# api.add_resource(User, '/user/<string:email>')
api.add_resource(Auth, '/auth')
api.add_resource(User, '/user')

app.run(port=8000, debug=True)
