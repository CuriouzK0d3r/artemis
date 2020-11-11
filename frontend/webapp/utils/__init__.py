import os


RABBITMQ_USER = os.getenv("RABBITMQ_USER", "guest")
RABBITMQ_PASS = os.getenv("RABBITMQ_PASS", "guest")
RABBITMQ_HOST = os.getenv("RABBITMQ_HOST", "rabbitmq")
RABBITMQ_PORT = os.getenv("RABBITMQ_PORT", 5672)
API_HOST = os.getenv("API_HOST", "postgrest")
API_PORT = os.getenv("API_PORT", 3000)
RABBITMQ_URI = "amqp://{}:{}@{}:{}//".format(
    RABBITMQ_USER, RABBITMQ_PASS, RABBITMQ_HOST, RABBITMQ_PORT
)

API_URI = "http://{}:{}".format(API_HOST, API_PORT)

GRAPHQL_URI = os.getenv("GRAPHQL_URI")
if GRAPHQL_URI is None:
    HASURA_HOST = os.getenv("HASURA_HOST", "graphql")
    HASURA_PORT = os.getenv("HASURA_PORT", 8080)
    GRAPHQL_URI = "http://{HASURA_HOST}:{HASURA_PORT}/v1alpha1/graphql".format(
        HASURA_HOST=HASURA_HOST, HASURA_PORT=HASURA_PORT
    )
HASURA_GRAPHQL_ACCESS_KEY = os.getenv("HASURA_GRAPHQL_ACCESS_KEY", "@rt3m1s.")
CONFIGURATION_HOST = os.getenv("CONFIGURATION_HOST", "configuration")
DATABASE_HOST = os.getenv("DATABASE_HOST", "database")
FILEOBSERVER_HOST = os.getenv("FILEOBSERVER_HOST", "fileobserver")
PREFIXTREE_HOST = os.getenv("PREFIXTREE_HOST", "prefixtree")
REST_PORT = int(os.getenv("REST_PORT", 3000))


def flatten(items, seqtypes=(list, tuple)):
    res = []
    if not isinstance(items, seqtypes):
        return [items]
    for item in items:
        if isinstance(item, seqtypes):
            res += flatten(item)
        else:
            res.append(item)
    return res
