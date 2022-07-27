FROM python:3.9

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /code
COPY ./requirements.txt /code/

RUN pip install -U pip
RUN python3 -m pip install --no-cache-dir -r requirements.txt

RUN pip install -U 'Twisted[tls,http2]'
RUN pip install 'uvicorn[standard]'
COPY . /code

COPY ./entrypoint.sh /

ENTRYPOINT ["sh", "/entrypoint.sh" ]