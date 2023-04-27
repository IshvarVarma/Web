#pip install flask requests
from flask import Flask, render_template, request
import requests

app = Flask(__name__)

api_key = "790f814954910cfef286702a3671082d"
url = "http://api.openweathermap.org/data/2.5/weather?"

@app.route('/', methods=['GET', 'POST'])
def weather():
    if request.method == 'POST':
        city = request.form['city']
        complete_url = url + "appid=" + api_key + "&q=" + city
        response = requests.get(complete_url)
        data = response.json()
        if data["cod"] != "404":
            weather_data = {
                "city": data["name"],
                "country": data["sys"]["country"],
                "temperature": int(data["main"]["temp"] - 273.15),
                "description": data["weather"][0]["description"],
                "icon": data["weather"][0]["icon"],
            }
            return render_template('index.html', weather=weather_data)
        else:
            return render_template('index.html', error="City not found")
    else:
        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)


    #export FLASK_APP=app.py
#export FLASK_ENV=development

#flask run
#python app.py