# api/tests.py
from django.test import TestCase
from .models import MenuItem

class MenuItemTest(TestCase):
    def test_create_menu_item(self):
        item = MenuItem.objects.create(name="IceCream", price=80, description="Delicious Ice Cream")
        self.assertEqual(str(item), "IceCream")