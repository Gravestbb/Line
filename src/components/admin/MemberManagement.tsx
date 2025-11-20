import { Search, Filter, Download, Upload, Edit, MoreVertical } from 'lucide-react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function MemberManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-1">会員管理</h2>
          <p className="text-gray-600">会員情報の検索・編集・管理を行えます</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="size-4" />
            エクスポート
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Upload className="size-4" />
            インポート
          </Button>
        </div>
      </div>

      {/* 検索・フィルター */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400" />
            <Input
              placeholder="会員ID、氏名、メールアドレスで検索"
              className="pl-10"
            />
          </div>
          
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="資格で絞り込み" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべて</SelectItem>
              <SelectItem value="basic">基礎資格</SelectItem>
              <SelectItem value="intermediate">中級資格</SelectItem>
              <SelectItem value="advanced">上級資格</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="更新状態" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべて</SelectItem>
              <SelectItem value="completed">更新済</SelectItem>
              <SelectItem value="pending">更新必要</SelectItem>
              <SelectItem value="overdue">期限超過</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="size-4" />
            詳細検索
          </Button>
        </div>
      </Card>

      {/* 会員統計 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-gray-600 text-sm mb-1">総会員数</p>
          <p className="text-gray-900 text-2xl">645名</p>
        </Card>
        <Card className="p-4">
          <p className="text-gray-600 text-sm mb-1">基礎資格</p>
          <p className="text-gray-900 text-2xl">645名</p>
        </Card>
        <Card className="p-4">
          <p className="text-gray-600 text-sm mb-1">中級資格</p>
          <p className="text-gray-900 text-2xl">312名</p>
        </Card>
        <Card className="p-4">
          <p className="text-gray-600 text-sm mb-1">上級資格</p>
          <p className="text-gray-900 text-2xl">87名</p>
        </Card>
      </div>

      {/* 会員一覧テーブル */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">会員一覧</h3>
          <p className="text-gray-600 text-sm">645名中 1-10名を表示</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-gray-700">会員ID</th>
                <th className="text-left py-3 px-4 text-gray-700">氏名</th>
                <th className="text-left py-3 px-4 text-gray-700">資格</th>
                <th className="text-left py-3 px-4 text-gray-700">更新状態</th>
                <th className="text-left py-3 px-4 text-gray-700">最終ログイン</th>
                <th className="text-left py-3 px-4 text-gray-700">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900">M-20240401</td>
                <td className="py-3 px-4 text-gray-900">山田 太郎</td>
                <td className="py-3 px-4">
                  <div className="flex gap-1">
                    <Badge className="bg-green-600">基礎</Badge>
                    <Badge className="bg-blue-600">中級</Badge>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <Badge className="bg-amber-600">4ヶ月後</Badge>
                </td>
                <td className="py-3 px-4 text-gray-900">2025/11/18</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Edit className="size-4 text-gray-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="size-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900">M-20230815</td>
                <td className="py-3 px-4 text-gray-900">佐藤 花子</td>
                <td className="py-3 px-4">
                  <div className="flex gap-1">
                    <Badge className="bg-green-600">基礎</Badge>
                    <Badge className="bg-blue-600">中級</Badge>
                    <Badge className="bg-purple-600">上級</Badge>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <Badge className="bg-green-600">更新済</Badge>
                </td>
                <td className="py-3 px-4 text-gray-900">2025/11/19</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Edit className="size-4 text-gray-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="size-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900">M-20240310</td>
                <td className="py-3 px-4 text-gray-900">鈴木 一郎</td>
                <td className="py-3 px-4">
                  <Badge className="bg-green-600">基礎</Badge>
                </td>
                <td className="py-3 px-4">
                  <Badge className="bg-green-600">更新済</Badge>
                </td>
                <td className="py-3 px-4 text-gray-900">2025/11/15</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Edit className="size-4 text-gray-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="size-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900">M-20230122</td>
                <td className="py-3 px-4 text-gray-900">田中 美咲</td>
                <td className="py-3 px-4">
                  <div className="flex gap-1">
                    <Badge className="bg-green-600">基礎</Badge>
                    <Badge className="bg-blue-600">中級</Badge>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <Badge className="bg-red-600">期限超過</Badge>
                </td>
                <td className="py-3 px-4 text-gray-900">2025/09/10</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Edit className="size-4 text-gray-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="size-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900">M-20240520</td>
                <td className="py-3 px-4 text-gray-900">高橋 健太</td>
                <td className="py-3 px-4">
                  <Badge className="bg-green-600">基礎</Badge>
                </td>
                <td className="py-3 px-4">
                  <Badge className="bg-green-600">更新済</Badge>
                </td>
                <td className="py-3 px-4 text-gray-900">2025/11/19</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Edit className="size-4 text-gray-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="size-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ページネーション */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <Button variant="outline" disabled>前へ</Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-blue-600 text-white">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <span className="text-gray-600">...</span>
            <Button variant="outline">65</Button>
          </div>
          <Button variant="outline">次へ</Button>
        </div>
      </Card>
    </div>
  );
}
