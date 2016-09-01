from django.views.decorators.cache import never_cache
from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

import json
import os
import time

# jobs = {"Reed":{"a":1, "b":2}, "Rebecca":{"a":22, "b":33}}


class JobsHandler(View):

    def get(self, request):
        with open('./data/jobs.json', 'r') as f:
            jobs = json.loads(f.read())

        return HttpResponse(json.dumps(jobs, sort_keys=True), content_type='application/json')

    @never_cache
    def post(self, request):
        with open('./data/jobs.json', 'r') as f:
            jobs = json.loads(f.read())

        new_job = json.loads(request.read())

        # import pdb; pdb.set_trace()
        id = new_job['title']
        jobs[id] = new_job

        with open('./data/jobs.json', 'w') as f:
            f.write(json.dumps(jobs, indent=4, separators=(',', ': ')))

        return HttpResponse(json.dumps(jobs[id]), content_type='application/json')
