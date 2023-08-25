FROM python:3.10-bookworm


WORKDIR /app

COPY . /app

# No need to separately install uWSGI and its plugins via apt-get
RUN pip3 install wheel
RUN pip3 install --no-cache-dir -r requirements.txt

EXPOSE 5000

ENV NAME World

CMD ["uwsgi", "--ini", "uwsgi.ini"]