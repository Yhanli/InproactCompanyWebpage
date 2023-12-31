FROM python:3.11

RUN apt update && apt upgrade -y
COPY ./requirements.txt /tmp/
WORKDIR /tmp
RUN pip install --upgrade pip && \
    pip install -r /tmp/requirements.txt 

RUN apt remove gcc-12 libicu-dev git libicu72 g++-12 libperl5.36 cpp-12 libstdc++-12-dev -y  && \
    apt autoremove -y