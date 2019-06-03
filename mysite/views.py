from django.views.generic.list import ListView
from main.models import ToyModel
class home_page(ListView):
    template_name = 'main/index.html'
    model = ToyModel