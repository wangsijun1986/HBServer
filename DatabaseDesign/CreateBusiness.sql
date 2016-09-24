/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2016/5/18 0:01:40                            */
/*==============================================================*/


drop table if exists AdminInfo;

drop table if exists BusinessConfig;

drop table if exists Category;

drop table if exists ClassicCase;

drop table if exists ContactUsMessage;

drop table if exists ModuleInfo;

drop table if exists News;

drop table if exists ServiceExplain;

drop table if exists User;

/*==============================================================*/
/* Table: AdminInfo                                             */
/*==============================================================*/
create table AdminInfo
(
   AdminId              bigint not null auto_increment comment '�û�Id',
   UserName             varchar(30) not null comment '�û���',
   NickName             varchar(20) not null comment ' �ǳ�',
   Password             varchar(255) not null comment '����',
   Email                varchar(35) comment '����',
   PhoneNumber          varchar(11) comment '�ֻ���',
   AuthorityLevel       smallint not null comment 'Ȩ�޼���',
   CreateDatetime       datetime not null default CURRENT_TIMESTAMP comment '����ʱ��',
   LastLoginDatetime    datetime comment '����¼ʱ��',
   CurrentHost          varchar(30) not null comment '��ǰ�豸��ַ',
   primary key (AdminId)
);

alter table AdminInfo comment '�����û���Ϣ';

/*==============================================================*/
/* Table: BusinessConfig                                        */
/*==============================================================*/
create table BusinessConfig
(
   ConfigId             bigint not null auto_increment comment '����Id',
   ConfigName           varchar(50) not null comment '��������',
   ConfigDetails        varchar(300) not null comment '���ý���',
   ConfigValue          longtext not null comment '��������',
   ConfigOff            tinyint not null default 0 comment '���ùر�',
   CreateDatetime       datetime not null default CURRENT_TIMESTAMP comment '��������ʱ��',
   IsSystemConfig       tinyint not null comment 'ϵͳ����',
   primary key (ConfigId)
);

alter table BusinessConfig comment '��ҵ������Ϣ';

/*==============================================================*/
/* Table: Category                                              */
/*==============================================================*/
create table Category
(
   CategoryId           char(36) not null default 'GUID.NewGuid()' comment '����Id',
   Name                 varchar(30) not null comment '��������',
   EnglishName          varchar(100) comment '����Ӣ������',
   CategoryLevel        smallint not null comment '���༶��',
   ParentCategoryId     char(36) not null comment '��������Id',
   CategoryCode         varchar(184) not null comment '������',
   SortIndex            int not null comment '��������',
   ModuleName           varchar(30) not null comment 'ģ������',
   primary key (CategoryId)
);

alter table Category comment '����';

/*==============================================================*/
/* Table: ClassicCase                                           */
/*==============================================================*/
create table ClassicCase
(
   CaseId               bigint not null auto_increment comment '����Id',
   CaseName             varchar(50) not null comment '��������',
   CaseDetails          longtext not null comment '��������',
   Images               longtext not null comment '����չʾͼ',
   WebUrl               varchar(500) not null comment '��վ��ַ',
   CreateDatetime       datetime not null default CURRENT_TIMESTAMP comment '���������¼�',
   OnlineDatetime       datetime not null comment '����ʱ��',
   primary key (CaseId)
);

alter table ClassicCase comment '���䰸��';

/*==============================================================*/
/* Table: ContactUsMessage                                      */
/*==============================================================*/
create table ContactUsMessage
(
   MessageId            bigint not null auto_increment comment '��ϢId',
   CreateDatetime       datetime not null default CURRENT_TIMESTAMP comment '�����¼�',
   Title                varchar(200) not null comment '��Ϣ����',
   Message              longtext not null comment '��Ϣ����',
   Email                varchar(35) comment '����������',
   Phone                varchar(20) comment '�������ֻ�',
   IsRead               tinyint not null default 0 comment '��Ϣ���Ķ�',
   primary key (MessageId)
);

alter table ContactUsMessage comment '��ϵ������Ϣ��¼';

/*==============================================================*/
/* Table: ModuleInfo                                            */
/*==============================================================*/
create table ModuleInfo
(
   ModuleId             bigint not null auto_increment comment 'ģ����ϢId',
   ModuleName           varchar(30) not null comment 'ģ������',
   ModuleExists         bit not null comment 'ģ���Ƿ����',
   CreateDatetime       datetime not null comment 'ģ�����ʱ��',
   ModuleDetails        longtext comment 'ģ������',
   primary key (ModuleId)
);

alter table ModuleInfo comment 'ģ����Ϣ';

/*==============================================================*/
/* Table: News                                                  */
/*==============================================================*/
create table News
(
   NewsId               bigint not null auto_increment comment '��ѶId',
   Title                varchar(100) not null comment '����',
   SubTitle             varchar(30) not null comment '������',
   Content              longtext not null comment '����',
   CreateDatetime       datetime not null default CURRENT_TIMESTAMP comment '����ʱ��',
   primary key (NewsId)
);

alter table News comment '��Ѷ��Ϣ';

/*==============================================================*/
/* Table: ServiceExplain                                        */
/*==============================================================*/
create table ServiceExplain
(
   ServiceId            bigint not null auto_increment comment '����Id',
   ServiceName          varchar(50) not null comment '��������',
   ServiceEnglishName   varchar(100) comment '����Ӣ������',
   ServiceIntro         varchar(1000) not null comment '�������',
   ServiceDetails       longtext not null comment '��������',
   ServicePicture       varchar(500) not null comment '������ͼ',
   ServiceICO           varchar(500) not null comment '����ͼ��',
   HomeShow             tinyint not null default 0 comment '��ҳ��ʾ',
   primary key (ServiceId)
);

alter table ServiceExplain comment '����˵��';

/*==============================================================*/
/* Table: User                                                  */
/*==============================================================*/
create table User
(
   UserId               bigint not null auto_increment comment '�û�Id',
   PhoneNumber          varchar(20) not null comment '�ֻ���',
   Password             varchar(32) not null comment '����',
   NickName             varchar(50) not null comment '�ǳ�',
   Gender               tinyint comment '�Ա�',
   Age                  int comment '����',
   CreateDatetime       datetime not null default CURRENT_TIMESTAMP comment '����ʱ��',
   CurrentHost          varchar(30) not null comment '��ǰ�豸��ַ',
   primary key (UserId)
);

alter table User comment '�û���Ϣ';

