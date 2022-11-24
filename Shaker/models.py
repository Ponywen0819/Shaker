# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Accounts(models.Model):
    account_id = models.CharField(max_length=255)
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=255, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    last_login = models.DateTimeField(blank=True, null=True)
    photo = models.ForeignKey('Picture', models.DO_NOTHING, db_column='photo', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'accounts'


class Admin(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    account = models.CharField(max_length=255, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'admin'


class Cart(models.Model):
    owner = models.ForeignKey(Accounts, models.DO_NOTHING)
    product = models.ForeignKey('Product', models.DO_NOTHING)
    count = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'cart'
        unique_together = (('owner', 'product'),)


class CategoryType(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'category_type'


class Comment(models.Model):
    order = models.ForeignKey('Order', models.DO_NOTHING)
    product = models.ForeignKey('Product', models.DO_NOTHING, blank=True, null=True)
    star = models.IntegerField(blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    picture = models.ForeignKey('Picture', models.DO_NOTHING, db_column='picture', blank=True, null=True)
    time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'comment'


class Coupon(models.Model):
    id = models.IntegerField(primary_key=True)
    owner = models.ForeignKey(Accounts, models.DO_NOTHING, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    type = models.ForeignKey('CouponType', models.DO_NOTHING, db_column='type')
    shop = models.ForeignKey('Shop', models.DO_NOTHING)
    start_time = models.DateTimeField(blank=True, null=True)
    end_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'coupon'


class CouponType(models.Model):
    minimum_consumption = models.DecimalField(max_digits=10, decimal_places=0, blank=True, null=True)
    discount = models.DecimalField(max_digits=10, decimal_places=0, blank=True, null=True)
    dicount_type = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'coupon_type'


class Order(models.Model):
    owner_id = models.IntegerField(blank=True, null=True)
    start_time = models.DateTimeField(blank=True, null=True)
    end_time = models.DateTimeField(blank=True, null=True)
    payment = models.IntegerField(blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    free_fee = models.IntegerField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'order'


class OrderDetail(models.Model):
    order = models.ForeignKey(Order, models.DO_NOTHING)
    product = models.ForeignKey('Product', models.DO_NOTHING, blank=True, null=True)
    number = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'order_detail'


class Picture(models.Model):
    id = models.IntegerField(primary_key=True)
    file_path = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'picture'


class Product(models.Model):
    shop = models.ForeignKey('Shop', models.DO_NOTHING, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    number = models.IntegerField(blank=True, null=True)
    intro = models.CharField(max_length=255, blank=True, null=True)
    category = models.ForeignKey(CategoryType, models.DO_NOTHING, db_column='category', blank=True, null=True)
    picture = models.ForeignKey(Picture, models.DO_NOTHING, blank=True, null=True)
    avgstar = models.CharField(max_length=255, blank=True, null=True)
    status = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'product'


class Shop(models.Model):
    owner = models.ForeignKey(Accounts, models.DO_NOTHING, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    avgstar = models.IntegerField(blank=True, null=True)
    intro = models.CharField(max_length=255, blank=True, null=True)
    last_login = models.DateTimeField(blank=True, null=True)
    logo = models.ForeignKey(Picture, models.DO_NOTHING, db_column='logo', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'shop'
