from flask import request
from flask_restful import Resource
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

from server import db

class Auth(Resource):
  def get(self):
    try:
      user = db.users.find_one(request.args)
      if not user:
        return {'message': "No user found with the given details"}, 404

      return {"Token" : create_access_token(identity=user['email'])}, 200
      # {'Access-Control-Allow-Origin': '*'}
      
    except KeyError as err:
      return {'message': f'{err} is required to search a user'}, 400
  