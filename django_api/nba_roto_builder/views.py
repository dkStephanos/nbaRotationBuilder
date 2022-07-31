from django.shortcuts import render
from django.views import View
from django.http import HttpResponse
import json

# Create your views here.


class Players(View):
    def get(self, request):
        return HttpResponse(content=json.dumps("Hello, World!"))
