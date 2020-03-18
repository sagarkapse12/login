from django.urls import path
from . import views
from django.contrib.auth.views import LoginView,LogoutView


urlpatterns=[
    path('',views.home,name='home'),
    path('index/',views.index,name='index'),
    path('register/',views.registerpage,name='register'),
    path('login/',LoginView.as_view(),name='login'),
    path('logout/',LogoutView.as_view(next_page="index"),name='logout')
]