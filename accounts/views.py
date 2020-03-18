from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required

# Create your views here.

def home(request):
    return render(request,'registration/home.html')

@login_required()
def index(request):
    return render(request,"registration/index.html")

def registerpage(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form=UserCreationForm()
    context={'form':form}
    return render(request,'registration/register.html',context)

def logout(request):
    return redirect('login')