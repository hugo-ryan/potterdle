from flask import Flask, render_template

potterdle = Flask(__name__)

@potterdle.route('/')
def homepage():
    return render_template('homepage.html')

@potterdle.route("/personagens")
def personagens():
    return render_template("personagens.html")

@potterdle.route("/feiticos")
def feiticos():
    return render_template("feiticos.html")

if __name__ == '__main__':
    potterdle.run(debug=True)
