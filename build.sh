#!/bin/bash
set -e 
podman build -t priority-attendance .
podman tag priority-attendance regdk8s.priority-software.com/priority-attendance
podman push regdk8s.priority-software.com/priority-attendance:latest
kubectl delete pods -l app=priority-attendance