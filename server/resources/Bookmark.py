from flask import request
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity

from server import db

class Bookmark(Resource):
  @jwt_required()
  def post(self):
    email = get_jwt_identity()
    user = db.users.find_one({"email": email})
    bookmark = request.get_json()

    if bookmark["status"]:
      user["bookmarks"].append({"genre": bookmark['genre'],"id": bookmark['id']})
    else:
      for bm in user["bookmarks"]:
        if bookmark["genre"] == bm["genre"] and bookmark['id'] == bm['id']:
          user["bookmarks"].remove(bm)
          break
    
    db.users.update_one({"email": email}, {"$set": {"bookmarks": user["bookmarks"]}})

    return {'message': f'A {bookmark["genre"]} with {bookmark["id"]} has been successfully updated.'}, 200