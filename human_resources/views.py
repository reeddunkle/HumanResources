from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

import json
import os
import time


class JobsHandler(View):
    def get(self, request):
        with open('./data/jobs.json', 'r') as f:
            jobs = json.loads(f.read())
        return HttpResponse(json.dumps(jobs))

    def post(self, request):
        pass
