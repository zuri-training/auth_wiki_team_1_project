from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from wiki.models import CodeSample


def wiki_index(request):
    posts = CodeSample.objects.all().order_by("-created_on")
    context = {
        "posts": posts,
    }
    return render(request, "wiki_index.html", context)


def wiki_category(request, category):
    posts = CodeSample.objects.filter(categories__name__contains=category).order_by(
        "-created_on"
    )
    context = {"category": category, "posts": posts}
    return render(request, "wiki_category.html", context)
