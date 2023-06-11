from django.urls import path
from . import views

urlpatterns = [
    path('', views.base,name='base'),
    path('home/', views.home, name = 'home'),
    path('o-nama/', views.o_nama, name='o-nama'),
    path('usluge/', views.usluge, name='usluge'),
    path('kontakt/', views.kontakt, name='kontakt'),
    
]
