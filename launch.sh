#! /bin/bash

bundle install && bundle exec middleman build && open build/index.html
