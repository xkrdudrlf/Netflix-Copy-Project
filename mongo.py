from flask import Flask, Response, request
import pymongo
import json
from bson.objectid import ObjectId

app = Flask(__name__)

try:
    mongo = pymongo.MongoClient(
        host="localhost", port=27017, serverSelectionTimeoutMS=1000)
    db = mongo.company
    mongo.server_info  # trigger exception if cannot connect to DB
except:
    print("ERROR - CANNOT CONNECT TO DB")

#########################################UPDATE#


@app.route("/users/<id>", methods=["PATCH"])
def update_user(id):
    try:
        dbResponse = db.users.update_one(
            {"_id": ObjectId(id)},
            {"$set": {"name": request.form["name"]}}
        )

        if dbResponse.modified_count == 1:
            return Response(
                response=json.dumps({"message": "user updated"}),
                status=200,
                mimetype="application/json"
            )
        else:
            return Response(
                response=json.dumps({"message": "nothing to update"}),
                status=200,
                mimetype="application/json"
            )
    except Exception as ex:
        print("********")
        print(ex)
        print("********")
        return Response(
            response=json.dumps({"message": "sorry, cannot update user"}),
            status=500,
            mimetype="application/json"
        )

#########################################READ#


@app.route("/users", methods=["GET"])
def get_some_users():
    try:
        data = list(db.users.find())
        for user in data:
            user["_id"] = str(user["_id"])
        return Response(
            response=json.dumps(data),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "cannot read users"}),
            status=500,
            mimetype="application/json"
        )

##########################################CREATE#


@app.route("/users", methods=["POST"])
def create_user():
    try:
        user = {"name": request.form["name"],
                "lastname": request.form["lastName"]}
        dbResponse = db.users.insert_one(user)
        for attr in dir(dbResponse):
            print(attr)
        return Response(
            response=json.dumps(
                {"message": "user created", "id": f"{dbResponse.inserted_id}"}),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)

###########################################


if __name__ == "__main__":
    app.run(port=3000, debug=True)
