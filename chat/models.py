from django.db import models
from django.db.models.signals import m2m_changed
from django.contrib.auth.models import User
from django.db.models import Q

class chatManager(models.Manager):
    def get_thread (self,user,otheruser):
        thread = chat_thread.objects.filter(Q(first__username =user), Q(second__username=otheruser)
        |Q(first__username =otheruser), Q(second__username=user))
        if thread.exists():
            print('im returning something')
            return thread.first()
        else:
            print('im returning nothing')
            return None
    def make_thread(self,user, otheruser):
        try:
            firstUser = User.objects.get(username = user)
            secondUser = User.objects.get(username = otheruser)
            thread = chat_thread(first = firstUser, second = secondUser)
        except:
            raise Exception(f'the user {otheruser} does not exist')
        print('dat chat has been made',thread)
        thread.save()
        return thread

    def get_or_make_thread(self, user, otheruser):
        print(user, otheruser)
        thread = self.get_thread(user, otheruser)
        print(  'this is a thread')
        if not thread:
            print('thread', 'thread not found')
            thread = self.make_thread(user, otheruser)
        return thread
    def get_pubthread(self):
        thread = self.objects.filter(first = None).first()
        print (thread, ' this should be a thread')
        return thread
class chat_thread(models.Model):   
       
    first = models.ForeignKey(User,on_delete = models.CASCADE,  null =True, blank = True,related_name='chat_thread_first')
    second = models.ForeignKey(User,on_delete = models.CASCADE,  null =True, blank = True,related_name='chat_thread_second')
    def __str__(self):
        try:
            return f'{self.first.username} with {self.second.username}'
        except:
            return 'Public chat room'
    
    objects = chatManager()



class chat_message(models.Model):
    message =models.TextField()
    thread = models.ForeignKey(chat_thread, on_delete= models.CASCADE)
    user = models.ForeignKey(User,verbose_name='sender',null =True, blank = True, on_delete=models.CASCADE)
 



