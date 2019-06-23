from django.views.generic.list import ListView
from main.models import ToyModel
class home_page(ListView):
    template_name = 'main/index.html'
    
    model = ToyModel
 #   print(get_context_data(**kwargs)
    def dispatch(self, request, *args, **kwargs):
        mario=  super().dispatch(request, *args, **kwargs)
        print (self.request,'shiiiiiiiiit')
        return mario

    def get_context_data(self, **kwargs):
        mario= super().get_context_data(**kwargs)
        print(mario)
        return mario