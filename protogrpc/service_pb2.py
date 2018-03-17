# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: service.proto

import sys
_b = sys.version_info[0] < 3 and (
    lambda x: x) or (lambda x: x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


DESCRIPTOR = _descriptor.FileDescriptor(
    name='service.proto',
    package='service',
    syntax='proto3',
    serialized_pb=_b('\n\rservice.proto\x12\x07service\"c\n\x0eMformatMessage\x12\x0f\n\x07service\x18\x01 \x01(\t\x12\x0c\n\x04type\x18\x02 \x01(\t\x12\x0e\n\x06prefix\x18\x03 \x01(\t\x12\x0f\n\x07\x61s_path\x18\x04 \x03(\x05\x12\x11\n\ttimestamp\x18\x05 \x01(\x01\"\x07\n\x05\x45mpty2L\n\x0fMessageListener\x12\x39\n\x0cqueryMformat\x12\x17.service.MformatMessage\x1a\x0e.service.Empty\"\x00\x42\x30\n\x16\x61rtemis.io.grpc.protosB\x0cServiceProtoP\x01\xa2\x02\x05SRVCPb\x06proto3')
)


_MFORMATMESSAGE = _descriptor.Descriptor(
    name='MformatMessage',
    full_name='service.MformatMessage',
    filename=None,
    file=DESCRIPTOR,
    containing_type=None,
    fields=[
        _descriptor.FieldDescriptor(
            name='service', full_name='service.MformatMessage.service', index=0,
            number=1, type=9, cpp_type=9, label=1,
            has_default_value=False, default_value=_b("").decode('utf-8'),
            message_type=None, enum_type=None, containing_type=None,
            is_extension=False, extension_scope=None,
            options=None, file=DESCRIPTOR),
        _descriptor.FieldDescriptor(
            name='type', full_name='service.MformatMessage.type', index=1,
            number=2, type=9, cpp_type=9, label=1,
            has_default_value=False, default_value=_b("").decode('utf-8'),
            message_type=None, enum_type=None, containing_type=None,
            is_extension=False, extension_scope=None,
            options=None, file=DESCRIPTOR),
        _descriptor.FieldDescriptor(
            name='prefix', full_name='service.MformatMessage.prefix', index=2,
            number=3, type=9, cpp_type=9, label=1,
            has_default_value=False, default_value=_b("").decode('utf-8'),
            message_type=None, enum_type=None, containing_type=None,
            is_extension=False, extension_scope=None,
            options=None, file=DESCRIPTOR),
        _descriptor.FieldDescriptor(
            name='as_path', full_name='service.MformatMessage.as_path', index=3,
            number=4, type=5, cpp_type=1, label=3,
            has_default_value=False, default_value=[],
            message_type=None, enum_type=None, containing_type=None,
            is_extension=False, extension_scope=None,
            options=None, file=DESCRIPTOR),
        _descriptor.FieldDescriptor(
            name='timestamp', full_name='service.MformatMessage.timestamp', index=4,
            number=5, type=1, cpp_type=5, label=1,
            has_default_value=False, default_value=float(0),
            message_type=None, enum_type=None, containing_type=None,
            is_extension=False, extension_scope=None,
            options=None, file=DESCRIPTOR),
    ],
    extensions=[
    ],
    nested_types=[],
    enum_types=[
    ],
    options=None,
    is_extendable=False,
    syntax='proto3',
    extension_ranges=[],
    oneofs=[
    ],
    serialized_start=26,
    serialized_end=125,
)


_EMPTY = _descriptor.Descriptor(
    name='Empty',
    full_name='service.Empty',
    filename=None,
    file=DESCRIPTOR,
    containing_type=None,
    fields=[
    ],
    extensions=[
    ],
    nested_types=[],
    enum_types=[
    ],
    options=None,
    is_extendable=False,
    syntax='proto3',
    extension_ranges=[],
    oneofs=[
    ],
    serialized_start=127,
    serialized_end=134,
)

DESCRIPTOR.message_types_by_name['MformatMessage'] = _MFORMATMESSAGE
DESCRIPTOR.message_types_by_name['Empty'] = _EMPTY
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

MformatMessage = _reflection.GeneratedProtocolMessageType('MformatMessage', (_message.Message,), dict(
    DESCRIPTOR=_MFORMATMESSAGE,
    __module__='service_pb2'
    # @@protoc_insertion_point(class_scope:service.MformatMessage)
))
_sym_db.RegisterMessage(MformatMessage)

Empty = _reflection.GeneratedProtocolMessageType('Empty', (_message.Message,), dict(
    DESCRIPTOR=_EMPTY,
    __module__='service_pb2'
    # @@protoc_insertion_point(class_scope:service.Empty)
))
_sym_db.RegisterMessage(Empty)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b(
    '\n\026artemis.io.grpc.protosB\014ServiceProtoP\001\242\002\005SRVCP'))

_MESSAGELISTENER = _descriptor.ServiceDescriptor(
    name='MessageListener',
    full_name='service.MessageListener',
    file=DESCRIPTOR,
    index=0,
    options=None,
    serialized_start=136,
    serialized_end=212,
    methods=[
        _descriptor.MethodDescriptor(
            name='queryMformat',
            full_name='service.MessageListener.queryMformat',
            index=0,
            containing_service=None,
            input_type=_MFORMATMESSAGE,
            output_type=_EMPTY,
            options=None,
        ),
    ])
_sym_db.RegisterServiceDescriptor(_MESSAGELISTENER)

DESCRIPTOR.services_by_name['MessageListener'] = _MESSAGELISTENER

# @@protoc_insertion_point(module_scope)
