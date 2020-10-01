<slim-column>



*   Introduction
    
*   Ecosystem
    
    *   Validators
        
    *   [Secret Apps](/apps.html)
    *   [Community Projects](/projects.html)
    *   [SGX Compliance](/sgx.html)
        *   [Psychz](/sgx.html#psychz)
*   Foundation
    

# SGX Compliance


The Secret Network has the requirement of running a compliant SGX enclave in order to successfully deploy a full node or a Secret Node. This page will go over the supported hardware and cloud providers. If you'd like to contribute more options please make a pull request or join us in the [the infrastructure room](https://chat.scrt.network/channel/infrastructure) .

# CPU Support


You must use a Xeon Processor that supports SGX via SPS. Here is a list of working processors. Substitute at your own risk.

1.  E-2276G
2.  E-2278G
3.  E-2288G
4.  E-2176G
5.  E-2178G
6.  E-2188G

# Motherboard Support


SuperMicro motherboards.

1.  X11SCZ-F
2.  X11SCM-F
3.  X11SCZ-F
4.  X11SSL-F

# Cloud Support


Note: Not all offerings from these providers will work with SGX. Be sure to pay attention to the instance you are purchasing and if you have any questions ask in [the infrastructure room](https://chat.scrt.network/channel/infrastructure) .

1.  Microsoft Azure Confidential Computing
    
2.  Alibaba Cloud (Note: Requires passport information from participants.)
    
3.  Psychz
    
4.  [Packet.net c3.small](https://www.packet.com/cloud/servers/c3-small/)
    
    # Psychz
    -------------------
    
    * * *
    
    ###  Overview
    
    Psychz is a cloud provider that is especially known for DDoS protection that is powerful and inexpensive. A member of the #infrastructure committee worked with them outside of this project and had a good experience.
    
    Overall they have no frills UI that allows for the BIOS access needed to properly configure SGX. They have been helpful offering moneyback if SGX couldn't be properly setup. Their servers are cheap and allow for easy payment with no commitments.
    
    ###  What works
    
    E3-12XXv5 Servers. This includes `E3-1230v5` and `E3-1270v5`.
    
    The current offering of all servers can be found here: [Psychz Server Offering](https://www.psychz.net/dashboard/client/web/order/dedicated-server?processor&processorBaseFreq&numberOfCpu7391&cpuCores&location)
    
    ###  OS
    
    I have tested with both Ubuntu 20.04 and 18.04. Both work.
    
    ###  Required Update(s)
    
    It is most likely that the machine will come with an older BIOS and/or Fireware. The versions needed are BIOS: v2.4 and Firmware: v1.58+ (Current is v1.60). I have prepared a template email to request these updates:
    
    ```
        Hi,
            I just got the <Machine Number> machine in <Machine Location>. I need both the BIOS & Firmware updated.
            Please find the proper updates here: https://www.supermicro.com/en/products/motherboard/X11SSL-F
            The BIOS I need is version 2.4 the file is X11SSLF0_602.zip
            The Firmware is version 1.60 and the file is SMT_X11_160.zip
            I need these updated before I can use the system. I understand there will be downtime and you have my permission to proceed.
        Best Regards,
        <Name>
    
    ```
    
    ###  Common Issue Warning
    
    I have had the experience multiple times where I order an E3-1230v5 and they give me an E3-1270v6 instead. This is somewhat understandable as it is a newer machine and which would usually make it more desirable. But at this point the v6 does not work.
    
    If this happens, reach out to support and insist that you need an E3-1230v5 not v6. They should switch it with no problems.
    
    ###  Bulk Offer
    
    I have reached out to psychz about a bulk order. At this point I am not pursueing this for a few reasons. But if you are interested reach out to Sandy | Stake or Die. IF interest is great enough if may be worth it.
    
    ###  BIOS Update
    
    After you have gotten the system setup with the correct BIOS and Firmware you will need to make a critical change to the BIOS. Hyperthreading needs to be disabled.
    
    To access the BIOS navigate to the IPMI section on the Device screen in the Pyschz Dashboard. Start IPMI and login.
    
    On the default System screen you should be able to confirm the BIOS and Firmware versions.
    
    Assuming all is correct, go to the `Remote Control` section and select `iKVM/HTML5`. Click on the `iKVM/HTML5` button bringing up a popup window that is a live view of the server interface. At the top is an option `Power Control`, select that and click `Set Power Reset`. The server will reboot.
    
    As it is booting up press the `[Delete]` key repeatedly. This should eventaully bring up the BIOS interface
    
    Select `Advanced` in the top menu and then `CPU Configuration`. Scroll down until you find the selectable option `Hyper-threading`. Change `Enabled` to `Disabled`. Press `[Esc]` to go back a level and then select `Save & Exit`. Select `Save Changes and Reset`. The server will reboot again and you are done.
    
    Your machine is now ready to folloe the SGX installation guide.
    

# Non-working Hardware


This is a list of hardware that does not work even though they advertise SGX support.

1.  Intel NUCs 8, 9, 10th generation.
2.  Dell Poweredge Servers
3.  OVH Coffee-Lake CPU offerings



</slim-column>