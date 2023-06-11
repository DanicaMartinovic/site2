from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'dostava/home.html')

def o_nama(request):
    return render(request, 'dostava/o-nama.html')

def base(request):
    return render(request, 'dostava/base.html')

def usluge(request):
    return render(request, 'dostava/usluge.html')

def kontakt(request):
    return render(request, 'dostava/kontakt.html')