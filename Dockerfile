FROM django

EXPOSE 8000

ADD . /simple_blog
WORKDIR /simple_blog

RUN pip install -r requirements.txt
RUN pip install django-tinymce

RUN ls -a

CMD [ "python", "./manage.py runserver 0.0.0.0:8000 --settings=mysite.settings.prod" ]