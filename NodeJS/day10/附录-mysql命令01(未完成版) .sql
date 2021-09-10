--01 mysql 数据库的操作

    -- 链接数据库

 
    
    -- 退出数据库
    --quit/exit

    

    -- sql语句最后需要有分号;结尾
    -- 显示数据库版本 version
    -- select version();
    
    
    
    -- 查看当前使用的数据库
    -- select database();
    
    

    -- 查看所有数据库

    

    -- 创建数据库
    -- create database 数据库名 charset=utf8;

    

    -- 查看创建数据库的语句
    -- show create database 数据库名

     

    -- 使用数据库
    -- use 数据库的名字

    

    -- 删除数据库
    -- drop database 数据库名;

    


--02 数据表的操作

    -- 查看当前数据库中所有表

    

    -- 创建表
    -- int unsigned 无符号整形
    -- auto_increment 表示自动增长跟主键在一起
    -- not null 表示不能为空
    -- primary key 表示主键
    -- default 默认值
    -- create table 数据表名字 (字段 类型 约束[, 字段 类型 约束]);



    

    -- 查看表结构
    -- desc 数据表的名字;


    
   
    -- 创建 classes 表(有id、name两个字段)


    
    
    
    -- 创建 students 表(有id、name、age、high (decimal)、gender (enum)、cls_id这些字段)


    

    -- 查看表的创建语句
    -- show create table 表名字;

    


    -- 修改表-添加字段 mascot (吉祥物)
    -- alter table 表名 add 列名 类型;   给classes表添加mascot字段
    alter table classes add mascot varchar(50);

   

    -- 修改表-修改字段：不重命名版
    -- alter table 表名 modify 列名 类型及约束;
    alter table classes modify mascot varchar(100);
   
    


    -- 修改表-修改字段：重命名版
    -- alter table 表名 change 原名 新名 类型及约束;
    alter table classes change mascot jxw int unsigned;
    


    -- 修改表-删除字段
    -- alter table 表名 drop 列名;
    alter table classes drop jxw;
    


    -- 删除表
    -- drop table 表名;
    -- drop database 数据库;
    drop table test;
   

    
--03 增删改查(curd)

    -- 增加
+-------+------------------+------+-----+---------+----------------+
| Field | Type             | Null | Key | Default | Extra          |
+-------+------------------+------+-----+---------+----------------+
| id    | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| name  | varchar(20)      | NO   |     | NULL    |                |
+-------+------------------+------+-----+---------+----------------+
        -- 全列插入
        -- insert into 表名(字段1,字段2) values(值1，值2);
        -- 主键字段 可以用 0  null   default 来占位
        -- 向classes表中插入 一个班级

        


        -- 向students表插入 一个学生信息
+--------+-------------------------------------+------+-----+---------+----------------+
| Field  | Type                                | Null | Key | Default | Extra          |
+--------+-------------------------------------+------+-----+---------+----------------+
| id     | int(10) unsigned                    | NO   | PRI | NULL    | auto_increment |
| name   | varchar(20)                         | NO   |     | NULL    |                |
| age    | int(10) unsigned                    | YES  |     | NULL    |                |
| high   | decimal(3,2)                        | YES  |     | NULL    |                |
| gender | enum('男','女','中性','保密')       | YES  |     | 保密    |                |
| cls_id | int(11)                             | YES  |     | NULL    |                |
+--------+-------------------------------------+------+-----+---------+----------------+
        -- 全部插入
        -- insert into 表名 values(值1,值2,值3...)


        -- 部分插入
        -- insert into 表名(列1,...) values(值1,...)


        -- 多行插入
        -- insert into 表名(列1) values(值), (值);



    -- 修改
    -- update 表名 set 列1=值1,列2=值2... where 条件;
        -- 全部修改
        
        
        -- 按条件修改
        
        
        
        -- 按条件修改多个值
        -- update students set gender ="",age = "" where name="xxx";
        
        
        
        
    -- 查询基本使用
        -- 查询所有列
        -- select * from 表名;
        -- 查询students表中的所有数据信息
        

        ---定条件查询  
        --查询id为1的学生所有信息  

        
        


        -- 查询指定列
        -- select 列1,列2,... from 表名;

        
    

        -- 可以使用as为列或表指定别名
        -- select 字段[as 别名] , 字段[as 别名] from 数据表;

        

        -- 字段的顺序
        -- select age, name from students;
        


    -- 删除
        -- 物理删除
        -- delete from 表名 where 条件

        
      

        -- 逻辑删除
        -- 用一个字段来表示 这条信息是否已经不能再使用了
        -- 给students表添加一个 is_delete 字段 bit 类型
        --alter table 表名 add 字段 类型 default 默认值;
        alter table students add is_delete bit default 0;
        --update 表名 set is_delete=1 where id=;
        update students set is_delete=1 where id=1;
        
 