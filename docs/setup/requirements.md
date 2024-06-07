# Requirements

## Hardware

### Minimal

Not tested yet!

### Recommended

Not tested yet!

## Software

### Java

You need to have Java 22 installed on your device.

```
java --version
```

:::tip Correct

openjdk version "22" 2024-03-19

OpenJDK Runtime Environment Temurin-22+36 (build 22+36)

OpenJDK 64-Bit Server VM Temurin-22+36 (build 22+36, mixed mode, sharing)

:::

:::danger Error

java: Command not found.

:::

If the output is "Command not found" please install Java 22 through the following commands on debian based distributions:

```
wget https://download.oracle.com/java/22/latest/jdk-22_linux-x64_bin.deb
sudo dpkg -i jdk-22_linux-x64_bin.deb
java --version
ls -ld /usr/lib/jvm/jdk*

echo 'export JAVA_HOME="/usr/lib/jvm/jdk-22-oracle-x64"' | sudo tee -a /etc/environment
echo 'export PATH="$PATH:${JAVA_HOME}/bin"' | sudo tee -a /etc/environment

source  /etc/environment
```

### APT

You need to have apt installed on your device.

```
apt -version
```

:::tip Correct

apt \[version]

:::

:::danger Error

apt: Command not found.

:::

If the output is "Command not found" please apt through the following commands on debian based distributions:

```
wget http://security.ubuntu.com/ubuntu/pool/main/a/apt/apt_1.0.1ubuntu2.17_amd64.deb -O apt.deb
sudo dpkg -i apt.deb
```
