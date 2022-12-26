from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify, current_app, make_response
from module.configs import configure_collection
import time
import json
import os
import uuid
from module.data_utils import database_utils
app = Blueprint('coupon_manager', __name__)

# @app.route("/PublishCoupon", methods=['POST'])
# def publish_coupon():
