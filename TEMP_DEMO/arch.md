### 连接网络
wifi-menu

### 分区
lsblk
cgdisk

/dev/sda1 500M  EF00     /boot/efi
/dev/sda2 500M  8300     /boot
/dev/sda3 50G   8300     /
/dev/sda4 6G    8300     swap
/dev/sda5 176G  8300     /home

### 格式化 & 挂载分区
mkfs.vfat -F32 /dev/sda1
mkfs.ext4 /dev/sda2
mkfs.ext4 /dev/sda3
mkfs.ext4 /dev/sda5

mkswap /dev/sda4
swapon /dev/sda4

mount /dev/sda3 /mnt

mkdir -p /mnt/boot
mkdir -p /mnt/home
mount /dev/sda3 /mnt/boot
mount /dev/sda5 /mnt/home

mkdir -p /mnt/boot/efi
mount /dev/sda1 /mnt/boot/efi

### 修改源
https://www.archlinux.org/mirrors/
http://126.am/archmirror
http://footearth.github.io/Font-End-Stu/arch_mirror.md
rankmirrors -v -n 25 archmirror | sed -n /^Server/p > $WORKDIR/mirrorlist.bak

### 安装系统
pacman -Syy
pacman -S axel
vi /etc/pacman.conf
XferCommand = /usr/bin/axel -n 5 -v -a -o %o %u
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

pacman-key --init && pacman-key --populate archlinux
pacman -Syu

pacman -S linux-firmware
pacman -S iw wpa_supplicant wpa_actiond
pacman -S dialog axel
pacman -S grub-efi-x86_64 efi

http://sandy.is-programmer.com/posts/36189.html

### 源
* http://mirror.lzu.edu.cn/archlinux/
* http://mirrors.stuhome.net/archlinux/
* http://mirrors.163.com/archlinux/
* http://mirrors.ustc.edu.cn/archlinux/
* http://ftp.sjtu.edu.cn/archlinux/
* http://mirrors.tuna.tsinghua.edu.cn/archlinux/
* http://mirrors.sohu.com/archlinux/
* http://202.38.95.110/archlinux/
* ftp://mirrors.easynews.com/linux/archlinux
* http://ftp.sjtu.edu.cn/archlinux/
* http://mirrors.neusoft.edu.cn/archlinux/
* http://mirrors.tuna.tsinghua.edu.cn/archlinux/
* http://mirrors.ustc.edu.cn/archlinux/
* http://mirrors.n-ix.net/archlinux/
* http://archlinux.cs.nctu.edu.tw/
* http://ftp.tku.edu.tw/Linux/ArchLinux/
* http://archlinux.c3sl.ufpr.br/
* http://www.gtlib.gatech.edu/pub/archlinux/
* http://ftp5.gwdg.de/pub/linux/archlinux/
* http://mirrors.kernel.org/archlinux/
* http://www.las.ic.unicamp.br/pub/archlinux/
* http://mirror.de.leaseweb.net/archlinux/
* http://archlinux.mirrors.uk2.net/
* http://mirror.1favre.de/
* http://mirrors.aggregate.org/archlinux/
* http://arch.apt-get.eu/
* http://arch.linux.net.mk/archlinux/
* http://archlinux.aubrac-medical.fr/
* http://archlinux.cu.be/
* http://archlinux.dcc.fc.up.pt/
* http://mirror.archlinux.ikoula.com/archlinux/
* http://archlinux.kz/
* http://archlinux.limun.org/
* http://mirror.archlinux.no/
* http://archlinux.openlabto.org/archlinux/
* http://archlinux.puzzle.ch/
* http://mirror.archlinux.ro/archlinux/
* http://archlinux.supsec.org/
* http://archlinux.surlyjake.com/archlinux/
* http://archlinux.uib.no/
* http://archlinux.vi-di.fr/
* http://artfiles.org/archlinux.org/
* http://ftp.availo.se/archlinux/
* http://ftp.byfly.by/pub/archlinux/
* http://mirror.bytemark.co.uk/archlinux/
* http://cake.lib.fit.edu/archlinux/
* http://mirrors.cat.pdx.edu/archlinux/
* http://mirror.cc.columbia.edu/pub/linux/archlinux/
* http://ftp.cc.uoc.gr/mirrors/linux/archlinux/
* http://mirror.chmuri.net/archmirror/
* http://mirror.cinosure.com/archlinux/
* http://cosmos.cites.illinois.edu/pub/archlinux/
* http://mirror.csclub.uwaterloo.ca/archlinux/
* http://mirror.cse.iitk.ac.in/archlinux/
* http://mirror.datacenter.by/pub/archlinux/
* http://distrib-coffee.ipsl.jussieu.fr/pub/linux/archlinux/
* http://archlinux.mirror.dkm.cz/pub/archlinux/
* http://mirrors.dotsrc.org/archlinux/
* http://ftp.eenet.ee/pub/archlinux/
* http://mirror.fluxent.de/archlinux/
* http://foss.aueb.gr/mirrors/linux/archlinux/
* http://fruk.org/archlinux/
* http://ftp.kaist.ac.kr/ArchLinux/
* http://ftp.tsukuba.wide.ad.jp/Linux/archlinux/
* http://ftp.wa.co.za/pub/archlinux/
* http://mirrors.gigenet.com/archlinux/
* http://archlinux.goodsoft.lv/
* http://mirror.ancl.hawaii.edu/linux/archlinux/
* http://ftp.hawo.stw.uni-erlangen.de/archlinux/
* http://ftp.heanet.ie/mirrors/ftp.archlinux.org/
* http://ftp.hosteurope.de/mirror/ftp.archlinux.org/
* http://mirror1.htu.tugraz.at/archlinux/
* http://mirrors.hustunique.com/archlinux/
* http://mirror.i3d.net/pub/archlinux/
* http://ftp2.iinet.net.au/pub/archlinux/
* http://mirror.its.dal.ca/archlinux/
* http://ftp.jaist.ac.jp/pub/Linux/ArchLinux/
* http://ftp.klid.dk/ftp/archlinux/
* http://mirror.learn.ac.lk/archlinux/
* http://ftp.linux.kiev.ua/pub/Linux/ArchLinux/
* http://mirrors.liquidweb.com/archlinux/
* http://mirror.lnx.sk/pub/linux/archlinux/
* http://lug.mtu.edu/archlinux/
* http://ftp.lysator.liu.se/pub/archlinux/
* http://mirror.metrocast.net/archlinux/
* http://ftp.mfa.kfki.hu/pub/mirrors/ftp.archlinux.org/
* http://mirror.michael-eckert.net/archlinux/
* http://mir.archlinux.fr/
* http://miroir.ezvan.fr/archlinux/
* http://mirror-fpt-telecom.fpt.net/archlinux/
* http://www.mirrorservice.org/sites/ftp.archlinux.org/
* http://mirrors.mithril.org.ua/linux/archlinux/
* http://mirror.neolabs.kz/archlinux/
* http://mirror.netcologne.de/archlinux/
* http://ftp.neutrinopower.de/archlinux/
* http://mirror.nexcess.net/archlinux/
* http://ftp.ntua.gr/pub/linux/archlinux/
* http://mirror.nus.edu.sg/archlinux/
* http://mirror.optus.net/archlinux/
* http://osl.ugr.es/archlinux/
* http://archlinux.mirrors.ovh.net/archlinux/
* http://pet.inf.ufsc.br/mirrors/archlinux/
* http://archlinux.mirror.pl.ionic.net.pl/
* http://mirror.pmf.kg.ac.rs/archlinux/
* http://archlinux.polymorf.fr/
* http://ftp.portlane.com/pub/os/linux/archlinux/
* http://mirrors.prometeus.net/archlinux/
* http://ord.mirror.rackspace.com/archlinux/
* http://dfw.mirror.rackspace.com/archlinux/
* http://hkg.mirror.rackspace.com/archlinux/
* http://syd.mirror.rackspace.com/archlinux/
* http://archlinux.mirror.rafal.ca/
* http://sunsite.rediris.es/mirror/archlinux/
* http://ftp.rnl.ist.utl.pt/pub/archlinux/
* http://mirror.rol.ru/archlinux/
* http://archlinux.mirror.root.lu/
* http://mirrors.rutgers.edu/archlinux/
* http://ftp.halifax.rwth-aachen.de/archlinux/
* http://linux.rz.rub.de/archlinux/
* http://mirror.selfnet.de/archlinux/
* http://ftp.snt.utwente.nl/pub/os/linux/archlinux/
* http://ftp.spline.inf.fu-berlin.de/mirrors/archlinux/
* http://mirrors.st.uz/archlinux/
* http://suro.ubaya.ac.id/archlinux/
* http://ftp.swin.edu.au/archlinux/
* http://mirror.system.is/arch/
* http://mirrors.lax1.thegcloud.com/arch/
* http://ftp.tu-chemnitz.de/pub/linux/archlinux/
* http://ftp.tuxdroid.org/archlinux/
* http://archlinux.mirror.uber.com.au/
* http://mirror.umd.edu/archlinux/
* http://www.laqee.unal.edu.co/archlinux/
* http://ftp.uni-bayreuth.de/linux/archlinux/
* http://mirror.unitedcolo.de/archlinux/
* http://ftp.vectranet.pl/archlinux/
* http://archlinux.mirror.vexxhost.com/
* http://mirror.vpsfree.cz/archlinux/
* http://mirrors.xmission.com/archlinux/
* http://mirror.xnet.co.nz/pub/archlinux/
* http://mirror.archlinux.cl/
* http://mirror.archlinux.fi/archlinux/
* http://ftp.df.lth.se/pub/archlinux/
* http://ftp.ds.hj.se/pub/os/linux/archlinux/
* http://ftp-stud.hs-esslingen.de/pub/Mirrors/archlinux/
* http://archlinux.igor.onlinedirect.bg/
* http://mirror.internode.on.net/pub/archlinux/
* http://mirror.isoc.org.il/pub/archlinux/
* http://ftp.nluug.nl/pub/os/Linux/distr/archlinux/
* http://ftp.osuosl.org/pub/archlinux/
* http://ftp.otenet.gr/linux/archlinux/
* http://ftp.uni-kl.de/pub/linux/archlinux/
* http://ftp.uni-kl.de/pub/linux/archlinux/
* http://archlinux.nautile.nc/archlinux/
* http://mirror.jmu.edu/pub/archlinux/
* http://jaran.undip.ac.id/archlinux/
* http://archlinux.mirror.kangaroot.net/
