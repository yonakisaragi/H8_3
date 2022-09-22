s = "Hacktiv8-PTP Python for Data Science"
a = [100, 200, 300]

def foo(arg):
    print(f'arg = {arg}')
    print('arg = ', arg)
    
class Foo:
    pass

if(__name__ == '__main__'):
    print('Executing as standalone script')
    print(s)
    print(a)
    foo('aqux')
    x = Foo()
    print(x)