from django.views.generic.list import ListView, View
from main.models import ToyModel
from django.shortcuts import render
class home_page(View,):
    template_name = 'main/index.html'
    
    model = ToyModel
    
    """
        template_name = 'main/index.html'
    
    model = ToyModel
    mario = request.session.get('mario',None)
    
    if  not mario:
        self.request.session['mario']= 1
    else:
        self.request.session['mario'] += 1
    print(self.request.session['mario'], ' this is the session number')
    """
 #   print(get_context_data(**kwargs)
    def get(self, request, *args, **kwargs):

        return render(request,self.template_name)
    def dispatch(self, request, *args, **kwargs):
        
        

        mario=  super().dispatch(request, *args, **kwargs)
        return mario

    def get_context_data(self, **kwargs):
        mario= super().get_context_data(**kwargs)
        print(mario)
        return mario