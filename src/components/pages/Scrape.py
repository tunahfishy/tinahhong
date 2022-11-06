from bs4 import BeautifulSoup;
import requests;
from requests.api import head;
import csv

headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '3600',
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'
    }

url = 'https://thepassionpost.home.blog/'

def main():
    req = requests.get(url, headers)
    soup = BeautifulSoup(req.text, 'lxml')
    articles = soup.find_all('article')

    csv_file = open('../../../components/pages/blog_scrape.csv', 'w')
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(['title', 'link', 'description', 'imageLink'])

    for article in articles:
        header = article.h1
        info = header.a
        title = info.text
        description = article.find('div', class_='entry-content').p.text
        img = articles[1].img
        csv_writer.writerow([title, info['href'], description, img])

    csv_file.close()

if __name__ == "__main__":
    main()
