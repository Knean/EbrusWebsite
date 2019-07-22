from django import forms

class NameForm(forms.Form):
    our_name = forms.CharField(label='Your name', max_length=100)