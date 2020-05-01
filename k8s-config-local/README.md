Type in config file.

POod => use for run the container.
Service => use for setup some network for container cluster.

update config file.
$kubectl apply -f ${filename}
$$kubectl delete -f ${filename} for delete pod


get status
$kubectl get pods
$kubectl get deployments

get detail
$kubectl describe ${type}(pods) ${objname}(label in the configfile)

*Do not use Pods in the deployment to production.


Imparetive update image.
$kubectl set image <objtype>/<objname> <container_name>= <new image to use (tag)>
$kubectl set image deployment/client-deployment client ananjarucarunchai.multi-client:v2
