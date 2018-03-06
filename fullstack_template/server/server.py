from flask import Flask, render_template, jsonify

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/hello")
def hello():
    return jsonify({'hello': 'Hello world'})

if __name__ == "__main__":
  app.run()