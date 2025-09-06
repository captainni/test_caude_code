def calculate_sum(a, b):
    # 这是一个有问题的函数
    result = a + b
    return result

def buggy_function(x):
    # 这个函数有bug
    for i in range(x):
        print(i)
    # 缺少返回值
    
def unused_variable():
    # 这个函数有未使用的变量
    unused_var = "test"
    return "done"