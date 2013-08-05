### 连接网络
wifi-menu

### 分区
lsblk
cgdisk

/dev/sda1 1G EF00
/dev/sda2 220G 8300
/dev/sda3 12G 8200

### 格式化 & 挂载分区
mkfs.vfat -F32 /dev/sda1
mkfs.ext4 /dev/sda2

mkswap /dev/sda3
swapon /dev/sda3

mount /dev/sda2 /mnt
mkdir -p /mnt/boot

mount /dev/sda1 /mnt/boot

### 安装系统
pacman -Syy
pacstrap /mnt base base-devel

### 生成fstab
genfstab -U -p /mnt >> /mnt/etc/fstab

### chroot到新系统
arch-chroot /mnt

### locale
vi /etc/locale.gen
locale-gen
touch /etc/locale.conf
vi /etc/locale.conf
LANG=en_US.UTF-8

### TIME
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
hwclock --systohc --utc

### HOSTNAME
echo arch > /etc/hostname

pacman -S linux-firmware
pacman -S iw wpa_supplicant wpa_actiond
pacman -S dialog

