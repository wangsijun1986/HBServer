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
   AdminId              bigint not null auto_increment comment '用户Id',
   UserName             varchar(30) not null comment '用户名',
   NickName             varchar(20) not null comment ' 昵称',
   Password             varchar(255) not null comment '密码',
   Email                varchar(35) comment '邮箱',
   PhoneNumber          varchar(11) comment '手机号',
   AuthorityLevel       smallint not null comment '权限级别',
   CreateDatetime       datetime not null default CURRENT_TIMESTAMP comment '创建时间',
   LastLoginDatetime    datetime comment '最后登录时间',
   CurrentHost          varchar(30) not null comment '当前设备地址',
   primary key (AdminId)
);

alter table AdminInfo comment '管理用户信息';

/*==============================================================*/
/* Table: BusinessConfig                                        */
/*==============================================================*/
create table BusinessConfig
(
   ConfigId             bigint not null auto_increment comment '配置Id',
   ConfigName           varchar(50) not null comment '配置名称',
   ConfigDetails        varchar(300) not null comment '配置介绍',
   ConfigValue          longtext not null comment '配置内容',
   ConfigOff            tinyint not null default 0 comment '配置关闭',
   CreateDatetime       datetime not null default CURRENT_TIMESTAMP comment '创建配置时间',
   IsSystemConfig       tinyint not null comment '系统配置',
   primary key (ConfigId)
);

alter table BusinessConfig comment '企业配置信息';

/*==============================================================*/
/* Table: Category                                              */
/*==============================================================*/
create table Category
(
   CategoryId           char(36) not null default 'GUID.NewGuid()' comment '分类Id',
   Name                 varchar(30) not null comment '分类名称',
   EnglishName          varchar(100) comment '分类英文名称',
   CategoryLevel        smallint not null comment '分类级别',
   ParentCategoryId     char(36) not null comment '父级分类Id',
   CategoryCode         varchar(184) not null comment '分类码',
   SortIndex            int not null comment '排序索引',
   ModuleName           varchar(30) not null comment '模块名称',
   primary key (CategoryId)
);

alter table Category comment '分类';

/*==============================================================*/
/* Table: ClassicCase                                           */
/*==============================================================*/
create table ClassicCase
(
   CaseId               bigint not null auto_increment comment '案例Id',
   CaseName             varchar(50) not null comment '案例名称',
   CaseDetails          longtext not null comment '案例详情',
   Images               longtext not null comment '案例展示图',
   WebUrl               varchar(500) not null comment '网站地址',
   CreateDatetime       datetime not null default CURRENT_TIMESTAMP comment '案例创建事件',
   OnlineDatetime       datetime not null comment '上线时间',
   primary key (CaseId)
);

alter table ClassicCase comment '经典案例';

/*==============================================================*/
/* Table: ContactUsMessage                                      */
/*==============================================================*/
create table ContactUsMessage
(
   MessageId            bigint not null auto_increment comment '消息Id',
   CreateDatetime       datetime not null default CURRENT_TIMESTAMP comment '创建事件',
   Title                varchar(200) not null comment '消息标题',
   Message              longtext not null comment '消息内容',
   Email                varchar(35) comment '留言者邮箱',
   Phone                varchar(20) comment '留言者手机',
   IsRead               tinyint not null default 0 comment '消息已阅读',
   primary key (MessageId)
);

alter table ContactUsMessage comment '联系我们消息记录';

/*==============================================================*/
/* Table: ModuleInfo                                            */
/*==============================================================*/
create table ModuleInfo
(
   ModuleId             bigint not null auto_increment comment '模块信息Id',
   ModuleName           varchar(30) not null comment '模块名称',
   ModuleExists         bit not null comment '模块是否存在',
   CreateDatetime       datetime not null comment '模块加载时间',
   ModuleDetails        longtext comment '模块详情',
   primary key (ModuleId)
);

alter table ModuleInfo comment '模块信息';

/*==============================================================*/
/* Table: News                                                  */
/*==============================================================*/
create table News
(
   NewsId               bigint not null auto_increment comment '资讯Id',
   Title                varchar(100) not null comment '标题',
   SubTitle             varchar(30) not null comment '副标题',
   Content              longtext not null comment '内容',
   CreateDatetime       datetime not null default CURRENT_TIMESTAMP comment '创建时间',
   primary key (NewsId)
);

alter table News comment '资讯信息';

/*==============================================================*/
/* Table: ServiceExplain                                        */
/*==============================================================*/
create table ServiceExplain
(
   ServiceId            bigint not null auto_increment comment '服务Id',
   ServiceName          varchar(50) not null comment '服务名称',
   ServiceEnglishName   varchar(100) comment '服务英文名称',
   ServiceIntro         varchar(1000) not null comment '服务介绍',
   ServiceDetails       longtext not null comment '服务详情',
   ServicePicture       varchar(500) not null comment '服务配图',
   ServiceICO           varchar(500) not null comment '服务图标',
   HomeShow             tinyint not null default 0 comment '首页显示',
   primary key (ServiceId)
);

alter table ServiceExplain comment '服务说明';

/*==============================================================*/
/* Table: User                                                  */
/*==============================================================*/
create table User
(
   UserId               bigint not null auto_increment comment '用户Id',
   PhoneNumber          varchar(20) not null comment '手机号',
   Password             varchar(32) not null comment '密码',
   NickName             varchar(50) not null comment '昵称',
   Gender               tinyint comment '性别',
   Age                  int comment '年龄',
   CreateDatetime       datetime not null default CURRENT_TIMESTAMP comment '创建时间',
   CurrentHost          varchar(30) not null comment '当前设备地址',
   primary key (UserId)
);

alter table User comment '用户信息';

