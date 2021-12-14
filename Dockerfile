FROM django

EXPOSE 8000

# ADD .
# WORKDIR 

RUN pip install -r requirements.txt


RUN ls -a

CMD [ "python", "./manage.py runserver --settings=flux_back.settings" ]