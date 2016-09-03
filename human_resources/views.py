from django.views.decorators.cache import never_cache
from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

import json
import os
import time

# jobs = {"Reed":{"a":1, "b":2}, "Rebecca":{"a":22, "b":33}}


class DataHandler(View):

    def get(self, request):
        with open('./data/data.json', 'r') as f:
            data = json.loads(f.read())

        return HttpResponse(json.dumps(data), content_type='application/json')


    @never_cache
    def post(self, request):
        new_data = json.loads(request.read())

        with open('./data/data.json', 'w') as f:
            f.write(json.dumps(new_data, indent=4, separators=(',', ': ')))

        return HttpResponse(json.dumps(new_data), content_type='application/json')


    def delete(self, request):
        with open('./data/data.json', 'r') as f:
            data = json.loads(f.read())

        subject, id = json.loads(request.read())
        deleted_item = data['subject'].pop(id, None)

        with open('./data/data.json', 'w') as f:
            f.write(json.dumps(data, indent=4, separators=(',', ': ')))

        return HttpResponse(json.dumps(deleted_item), content_type='application/json')
