---
layout: ~/layouts/DocumentationLayout
---

# SGX Compliance

The Secret Network has the requirement of running a compliant SGX enclave in order to successfully deploy a full node or a Secret Node. This page will go over the supported hardware and cloud providers. If you'd like to contribute more options please make a pull request or join us in the [the infrastructure room](https://chat.scrt.network/channel/infrastructure).

# CPU Support

You must use a Xeon Processor that supports SGX via SPS. Here is a list of working processors. Substitute at your own risk.

1. E-2276G
2. E-2278G
3. E-2288G
4. E-2176G
5. E-2178G
6. E-2188G


# Motherboard Support

SuperMicro motherboards.
1. X11SCZ-F
2. X11SCM-F
3. X11SCZ-F
4. X11SSL-F

# Cloud Support

Note: Not all offerings from these providers will work with SGX. Be sure to pay attention to the instance you are purchasing and if you have any questions ask in [the infrastructure room](https://chat.scrt.network/channel/infrastructure).

1. Microsoft Azure Confidential Computing
2. Alibaba Cloud (Note: Requires passport information from participants.)
3. Psychz
4. [Packet.net c3.small](https://www.packet.com/cloud/servers/c3-small/)

**Non-working Hardware**

This is a list of hardware that does not work even though they advertise SGX support.

1. Intel NUCs 8, 9, 10th generation.
2. Dell Poweredge Servers
3. OVH Coffee-Lake CPU offerings