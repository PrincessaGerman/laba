from django.urls import path
from . import views

urlpatterns = [
    path('menu-items/', views.MenuItemList.as_view()),
    path('menu-items/<int:pk>/', views.MenuItemDetail.as_view()),
    path('bookings/', views.BookingList.as_view()),
    path('bookings/<int:pk>/', views.BookingDetail.as_view()),
    path('users/', views.UserList.as_view()),
]