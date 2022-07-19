from crypt import methods
from urllib import request
from flask import Flask, request
import trending_hashtag
app = Flask(__name__)


@app.route("/")
def hello_world():
  return "Hello, World!"


@app.route('/trending/hashtag',methods=['GET'])
def getHashTag():
    args = request.args
    print(args)
    keyword = args["keyword"]
    v_list=trending_hashtag.get_top_videos_for_hashtag(keyword)
    return {"result":v_list}


if __name__ == "__main__":
    app.run()